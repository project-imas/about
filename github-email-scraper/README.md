This is a quick ruby script to get public emails of contributors, watchers, stargazers, and forkers of all repos for a user/organization.  Please use responsibly and respect those who wish to opt out of your email communications.

Developed using ruby 2.1, however should run successfully with similar versions of ruby.

Gems required:
[Github_API](http://peter-murach.github.io/github/)

Usage:

Before using the script, change USERNAME and PASSWORD in login.rb to a set of valid github login credentials for authentication.  This allows for 5000 API calls per hour as opposed to the default 60, which will not be enough due to the branching nature of this script.

This script takes a user or organization as a command line argument and an optional 0 or 1 to indicate whether output goes is printed or written to a local .csv.  No second argument or a 0 will print, and a 1 will write to csv.


Printed output:
```ruby
ruby scraper.rb myorganization
ruby scraper.rb myorganization 0
```


Output to a .csv:
```ruby
ruby scraper.rb myorganization 1
```
