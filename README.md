
iMAS - iOS Mobile Application Security
======================================

iOS secure application framework research to reduce iOS application vulnerabilities and information loss

![screenshot](https://github.com/project-imas/about/raw/master/imas_logo.png)

By Gregg Ganley, Caleb Davenport, and Shawn Valle


In Short
========
- iOS security controls beyond Apple's model
- iMAS wrapped applications will reduce iOS attack surface
- Security control reserach across static and dynamic vulnerabilities
- iOS vulnerability vector focus
  - Lost / stolen device, physical access attacks
  - Mitigate(1) threat of attacker has device, bruteforces the system passcode, and then steals private application information
  - Mitigate(2) malware using system passcode to gain access to private application data
- Controls open sourced for community use, feedback, and improvement


About
=====

iMAS is a colaborative research project from the MITRE corporation.  In summary: iMAS is an iOS secure application framework research project focused on reducing iOS application vulnerabilities and information loss.

- The research is investigating how to protect iOS applications and data beyond the Apple provided security model.  
- iOS meets enterprise security needs of customers, however many security experts cite critical vulnerabilities and have demonstrated exploits.  
- iMAS will research areas concentrated on reducing an adversary’s ability and efficiency to perform recon, exploitation, control and execution on iOS mobile applications.  
- iMAS will transform and increase the effectiveness of the existing iOS security model across major vulnerability areas including the System Passcode, jailbreak, debugger / run-time, flash storage, and keychain.- Further, research into a secure application container, including application framework, developer and validation tools/techniques will be done.  
- The primary use case is Healthcare PHI information on a mobile device also research will support other use cases.  
- Throughout the project, we plan to open source security controls, encourage community developers, and continue research to maintain relevance and currency. 

iMAS Custom Security Controls
=============================

iMAS is researching both static and dynmaic security defense in the form of custom iOS security controls.  Currently 3 components are available to the open source community:
     - *Secure Foundation Control*
        Cipherlib, crypto manager, keychain crypto
     - *AppPassword Control*
        Allows custom iOS user authentication mechanism
     - *PasscodeCheck Control*
        Allows an application to verify if an iOS passcode has been set and what complexity.  Based on this, an application can programtically decide to execute fully or in a degraded state given this system evidence
 
Each are available in an iMAS github repo.


hReader
=======
iMAS has partnered with hReader to bolster the Apple provided secuirty model.  More on [hReader.org](http://hReader.org) - A patient-centric mobile health data manager that provides patients and their families with their complete health information securely.   hReader.org source code is located [here](https://github.com/projecthreader/hReader)   

Use, Feedback, and Improvement
==============================

We strongly encourage developers to clone and use iMAS.  We also ask that you please provide us feedback on your intended use so we are able have an idea of relevancy and need - which will help to keep our research funded in the long run.  Lastly, please feel free to enhance and improve the actual controls by submitting pull requests early and often!

License
-------

Copyright 2012 The MITRE Corporation, All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.