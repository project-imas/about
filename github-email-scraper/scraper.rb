require "github_api"
require "json"
require_relative "login"

# Hash to store name:email pairs and avoid unnecessary calls
$emails = Hash.new

def getEmail(github, name)
  # Add username:email pair to hash if not already present
  if not $emails.has_key?(name)
    results = github.users.get user:name
    $emails[name] = results["email"]
  end
end

def getForks(github, name, repo_name)
  # Get all users who have forked name/repo_name
  result = github.repos.forks.list user:name, repo:repo_name

  result.each do |fork|
    getEmail(github, fork['owner']['login'])
  end
end

def getStars(github, name, repo_name)
  # Get all users who have starred name/repo_name
  result = github.activity.starring.list user:name, repo:repo_name

  result.each do |star|
    getEmail(github, star['login'])
  end
end

def getSubs(github, name, repo_name) 
  # Get all users who are watching name/repo_name
  result = github.activity.watching.list user:name, repo:repo_name

  result.each do |sub|
    getEmail(github, sub['login'])
  end
end

def getContribs(github, name, repo_name)
  # Get all users who have contributed to name/repo_name
  result = github.repos.stats.contributors user:name, repo:repo_name

  result.each do |contrib|
    getEmail(github, contrib['author']['login'])
  end
end

def getRepos(github, root_name)
  # Get all repos of a given user or organization
  result = github.repos.list user:root_name

  # Delve deeper for each repo
  result.each do |repo|
    getForks(github, root_name, repo['name'])
    getStars(github, root_name, repo['name'])
    getSubs(github, root_name, repo['name'])
    getContribs(github, root_name, repo['name'])
  end
end

# Authenticate github user
# Allows for 5000 requests per hour
github = Github.new login:$user, password:$pass

getRepos(github, ARGV[0])

if ARGV.length == 1 or ARGV[1].to_i == 0
# Print all obtained usernames and emails
  $emails.each_key do |key|
    if $emails[key] and $emails[key] != ""
      puts key + " -- " + $emails[key]
    end
  end
else
  # Write all emails to a csv file
  # Emails without an "@" symbol will error and print for manual entries
  # For example, github.at.github.com will need to be added manually
  output = File.open(ARGV[0] + "_emails.csv", "w")
  comma = false
  $emails.each_key do |key|
    if $emails[key] and $emails[key] != "" and $emails[key].include? "@"
      if comma
        output.print ", " + $emails[key] # Comma separated emails
        #output.print "; " + $emails[key] # Semi-colon separated emails
      else
        comma = true
        output.print $emails[key]
      end
    elsif $emails[key] and $emails[key] != "" and not $emails[key].include? "@"
      puts "Invalid email: " + key + " -- " + $emails[key]
    end
  end
end
