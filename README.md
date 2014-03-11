iMAS - iOS Mobile Application Security[![analytics](http://www.google-analytics.com/collect?v=1&t=pageview&_s=1&dl=https%3A%2F%2Fgithub.com%2Fproject-imas%2Fabout&_u=MAC~&cid=1757014354.1393964045&tid=UA-38868530-1)]()
======================================

iOS secure application framework research to reduce iOS application vulnerabilities and information loss

![screenshot](https://github.com/project-imas/about/raw/master/imas_logo.png)

Active Researchers: [Gregg Ganley](https://github.com/gandg) and [Gavin Black](https://github.com/gblackMitre)


iMAS Outreach
=================
- Computerworld article on April 23, 2013: Making safer iOS apps
  - [Computerworld site](http://www.computerworld.com/s/article/print/9238618/Kenneth_van_Wyk_Making_safer_iOS_apps?taxonomyName=App+Development&taxonomyId=11)
  - [local copy](http://htmlpreview.github.io/?https://github.com/project-imas/about/blob/master/Kenneth%20van%20Wyk%20%20Making%20safer%20iOS%20apps.htm) 
- OWASP Project
  - [OWASP project page](https://www.owasp.org/index.php/OWASP_iMAS_iOS_Mobile_Application_Security_Project)
- [OWASP AppSEC Nov 2013] (https://owasp.confex.com/owasp/appsecusa13/webprogram/Session1393.html)
  - iMAS presented by Gregg Ganley [link-to-video] (https://www.youtube.com/watch?v=TRDT8O2G56o&list=PLpr-xdpM8wG8ODR2zWs06JkMmlRiLyBXU&index=32) [link-to-slides] (http://2013.appsecusa.org/2013/wp-content/uploads/2013/12/iMAS-AppSecUSA-Nov13-v2.pptx)
- [BlackHat Arsenal talk] (http://www.blackhat.com/us-13/arsenal.html#Ganley), July/Aug 2013
  - iMAS will be demonstrated by Gregg Ganley, stop by and check it out!
- [OWASP Northern Virginia Chapter, August 2013] (http://www.meetup.com/OWASP-Northern-Virginia-Chapter/events/119172702)
  - iMAS presented by Gregg Ganley 
- [iMAS YouTube video] (http://youtu.be/92A3kg_kUSc), posted on July 2, 2013

In Short
========
- [iMAS YouTube video] (http://youtu.be/92A3kg_kUSc)
- iOS Application defense
- iOS security controls that go beyond Apple's security model
- iMAS wrapped applications will reduce the iOS app attack surface and increase your apps security
- Security control research across static and dynamic vulnerabilities
- iOS vulnerability vector focus
  - Lost / stolen device, physical access attacks
  - Mitigate(1) threat of attacker  that has device, bruteforces the system passcode, and then steals private application information
  - Mitigate(2) malware using system passcode to gain access to private application data
- Industry security standards applied to each control, via Common Weakness Enumeration (CWE) software weaknesses.
- Controls open sourced for community use, feedback, and improvement
- Browse our project, download and give it a try, tell us what you think, or better yet, get involved and participate!


About
=====

iMAS is a collaborative research project from the MITRE corporation. In summary: iMAS is an iOS secure application framework research project focused on reducing iOS application vulnerabilities and information loss.
- The research is investigating how to protect iOS applications and data beyond the Apple provided security model.
- iOS meets enterprise security needs of customers, however many security experts cite critical vulnerabilities and have demonstrated exploits, which pushes enterprises to augment iOS deployments with commercial solutions.
- iMAS will research areas concentrated on reducing an adversary’s ability and efficiency to perform recon, exploitation, control and execution on iOS mobile applications.
- iMAS will transform and increase the effectiveness of the existing iOS security model across major vulnerability areas including the System Passcode, jailbreak, debugger / run-time, flash storage, and keychain. Further, research into a secure application container, including application framework, developer and validation tools/techniques will be done.
- iMAS will apply several software security standards, applicable to many diciplines.
  - Common Weakness Enumerations (CWE), better known as software errors, are applied to each vulnerability addressed. This will better help security engineers identify the value of each implementation. More CWE details can be found at http://cwe.mitre.org.
  - Defense Information Security Agency (DISA) has published a Mobile Application Security Reference Guide (SRG) for U.S. Department of Defense (DoD) mobile app developers.  iMAS addresses DISA's Mobile App SRG where applicable. More SRG details can be found at http://iase.disa.mil/stigs/net_perimeter/wireless/smartphone.html.
- The primary use case is Healthcare PHI information on a mobile device; research will support other use cases.
- Throughout the project, we plan to open source security controls, encourage community developers to get involved, and continue research to maintain relevance and currency. 

![screenshot](https://github.com/project-imas/about/raw/master/iMAS_framework.png)
 

iMAS Custom Security Controls
=============================

iMAS is researching both static and dynamic security defense in the form of custom iOS security controls. Currently four components are available to the open source community:
     
1. [*Secure Foundation Control*](https://github.com/project-imas/securefoundation)
   - Cipherlib, crypto manager, keychain crypto
2. [*AppPassword Control*](https://github.com/project-imas/app-password)
   - Custom iOS user authentication mechanism (password with security questions for self reset)
3. [*PasscodeCheck Control*](https://github.com/project-imas/passcode-check)
   - Allows an application to verify if an iOS passcode has been set and what complexity.  Based on this, an application can programtically decide to execute fully or in a degraded state given this system evidence
4. [*Encrypted Core Data*](https://github.com/project-imas/encrypted-core-data)
   - Provides a Core Data encrypted SQLite store using [SQLCipher](http://sqlcipher.net). 
5. [*Security-check*](https://github.com/project-imas/security-check)
   - Application level, attached debug detect and jailbreak checking
6. [*OpenSSL-FIPS crypto*](https://github.com/project-imas/iOS-openSSL-FIPS)
   - FIPS compliant SSL crypto ported to IOS
7. [*Memory Security*](https://github.com/project-imas/memory-security)
   - Library for securely clearing and validating iOS application memory
   - Elliminate clear-text sensitive data from memory after app use

All components are available in an iMAS github repo.

*In the works*

- iMAS security boosted open source Email client
   - Enhancing [reMail](http://code.google.com/p/remail-iphone/) with iMAS as a test application
   - In process as of Aug/Sep 2013
- Application self-signing integrity check at run-time
  - Developer can programatically determine if the application image has been tampered with
- Encrypted RAM Disk: research bundling TrueCrypt RAM disk within an app; allows for rapid data destruction on app exit 
- App Signature check: research confirmation that app is signed by original author
- Encrypted Code Modules (ECM)
   - Sensitive algorithms encrpyted and loaded at run-time and decrypted on the fly
   - Research will continue in Sept/Oct, with a release targeted end of Oct.
- FY14 Research planning
   - New research areas including, Open Source MDM interface security controls, Dynamic Security app bundling, off device trust via USB port

How To Use
==========

Browse the README files of each security control, clone, try out the sample app, incorporate into your iOS application, email us with feedback, contribute and participate !!

Why iMAS?
=========

A large percentage of iOS user have a weak system passcode (e.g. simple 4 digit passcode or no passcode at all).  The passcode is integral to the underlying security that supports iOS applications.  With a weak passcode, an attacker within a short of amount of time could connect a laptop to an iPhone/iPad, bruteforce guess the passcode, and steal enterprise information from iOS applications that are protected with standard iOS security.  With iMAS a developer can add security controls that prevent this easy attack.  Enterprises can augment their custom built iOS solutions with iMAS to ensure application security is bolstered and a deeper trust is established. As more and more important information, like a families personal health records, is pushed to mobile devices, measurable increases in security is critical.  With iMAS, we believe the application layer is a key area as part of a balanced, defense in depth security approach.

hReader
=======
iMAS has partnered with hReader to bolster the Apple provided security model. The developers added iMAS security controls to the application resulting in an experience that proved to be a great test-bed and partnership. hReader is a patient-centric mobile health data manager that securely provides patients and their families with their complete health information. To learn more about the application, go to [hReader.org](http://hReader.org) or check out their [source code](https://github.com/projecthreader/hReader).   

hReader Security Audit technical report is now available.  The report describes a security audit conducted on hReader in the summer of 2012 and it details the resulting, measured security compliance increase along with the labor costs.  Based on this, the iMAS community can add measured security to their applications in a cost effective manner.  To read more about this, please read the full report [here](https://github.com/project-imas/about/raw/master/hReader_Security_Audit_May2013.pdf)

Use, Feedback, and Improvement
==============================

We strongly encourage developers to clone and use iMAS. Once you’ve had a chance to use iMAS, tell us what you think by providing us with feedback on your intended use. This information will enable us to address relevancy and need - which will help to keep our research funded in the long run. Lastly, feel free to enhance and improve the actual controls by submitting pull requests early and often!

Contributing
============

1. Fork it
2. Create your feature branch (`git checkout -b my_new_feature`)
3. Commit your changes (`git commit -m 'Added some feature' -a`)
4. Push to the branch (`git push origin my_new_feature`)
5. Create a new Pull Request

iMAS Alumni Researchers
-----------------------

The iMAS research project wishes to recognize the efforts of the following people for their contributions to many 
aspects of iMAS:

- [Shawn Valle](https://github.com/SecurityShawn) 2012 and 2013
- [Kevin O'Keefe](https://github.com/centerthread) 2013
- [Caleb Davenport](https://github.com/calebmdavenport) 2012

Thank You!

License
-------

Copyright 2012, 2013 The MITRE Corporation, All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


