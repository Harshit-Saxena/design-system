/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// NOTE: Do not import any modules in here. This also runs in the browser.

const sanitizeVersion = version =>
  version.replace(/\s+|\(|\)/g, '_');

export default {
  abbreviatedName: 'SLDS',
  cssPrefix: 'slds-',
  displayName: 'Lightning Design System',
  filenamePrefix: 'slds',
  analyticsHostWhitelist: [
    'getslds.com',
    'www.getslds.com',
    'lightningdesignsystem.com',
    'www.lightningdesignsystem.com',
    'lightning-design-system.herokuapp.com',
    'salesforce.com',
    'www.salesforce.com'
  ],
  herokuLightingReactAppUrl: [
    {type: 'heroku-react-app', url: 'https://github.com/ccoenraets/lightning-react-app'},
    {type: 'heroku-static-starter', url: 'https://github.com/salesforce-ux/demo_slds_heroku'}
  ],
  moduleName: 'salesforce-lightning-design-system',
  resetWrappingClass: '.slds',
  zipName: function(version) {
    return this.moduleName + '-' + sanitizeVersion(version) + '.zip';
  },
  downloadPath: function(version) {
    return 'assets/downloads/' + this.zipName(version);
  },
  // until we can figure out the Chrome font issue
  displaySearch: false // !process.env.INTERNAL
};
