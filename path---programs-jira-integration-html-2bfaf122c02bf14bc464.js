webpackJsonp([5801527803180],{755:function(e,n){e.exports={data:{markdownRemark:{html:'<p>HackerOne enables you to set up a bi-directional Jira integration. This means that Jira users can sync specific workflows from Jira to HackerOne and vice versa, from HackerOne to Jira. This integration helps your development and security teams stay aligned, and contributes to a better workflow to process security vulnerabilities as it minimizes the back and forth between Jira and HackerOne.</p>\n<p>These events and directions are currently supported through the bi-directional Jira integration:</p>\n<table>\n<thead>\n<tr>\n<th>HackerOne to Jira</th>\n<th>Jira to HackerOne</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Comments</td>\n<td>Comments</td>\n</tr>\n<tr>\n<td>State changes</td>\n<td>State changes\n<br>\n<i>\nNote: The state change in Jira only shows up as an internal comment in the HackerOne report. The HackerOne report state doesn\'t change. You\'ll need to log into HackerOne to change the report state.</td>\n</tr>\n<tr>\n<td>Rewards</td>\n<td>Resolution changes</td>\n</tr>\n<tr>\n<td>Assignee changes</td>\n<td>Assignee changes</td>\n</tr>\n<tr>\n<td>Public disclosure</td>\n<td>Priority changes</td>\n</tr>\n</tbody>\n</table>\n<p>You can choose to integrate from 2 different types of Jira integrations:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="jira-cloud-integration.html">Jira Cloud</a></td>\n<td>You can access Jira from anywhere in the world.</td>\n</tr>\n<tr>\n<td><a href="jira-server-integration.html">Jira Server</a></td>\n<td>Jira is self-hosted and can be behind a firewall or VPN.</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p><i>Note: Jira Cloud isn\'t compatible with Jira Server.</i></p>\n</blockquote>\n<p>Jump to:</p>\n<ul>\n<li><a href="#creating">Creating a Jira Issue</a></li>\n<li><a href="#existing">Linking HackerOne Reports to Existing Jira Tasks</a></li>\n</ul>\n<h3>How it Works</h3>\n<p>A HackerOne report gets triaged and escalated into Jira.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-c8628.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 17.034700315457414%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAk0lEQVQI101P7QrDIAz0/d+pf32JbmyUDYW2VjutH53eNFRY4MglkLscw1UpJZznCe89IcZIu9ZDCAi1x2s+Do9SSj8l3sE45zDGkMg0TZBSkkDOXwghsCxr5Rni9cZzvOEx3rHX3TwryM3BhYT/YsMwkEhzVkpBaw3nHBk03s2MNtjURrD7B9Za2Pqpr+Y9SUv4Awgk5tpy3a4LAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="jira-integration-1"\n        title=""\n        src="/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-e7ffa.png"\n        srcset="/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-49813.png 125w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-dc8a5.png 250w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-e7ffa.png 500w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-dda24.png 750w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-c5f18.png 1000w,\n/static/jira-integration-3a43b77e9dd331c0203c13c005e9673c-c8628.png 1268w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Hackbot automatically captures the status change and posts an internal comment on the associated HackerOne report.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-c2133.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 22.712418300653596%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAAApklEQVQY06XLyw6DIBRFUf//+0x8lCsqraBUK6iVt8VJ0zjtyRqenez7Hpw12jijg7U+MiYK3h8hRMG5C6u109oqlWAA1t4RdE1F2jxr8uxxuzV53mM81HVfYfOanRBfdp4FpdswLIwlTu0UAaswhapDiAHwuo69pFSN45vz+P6NIy/lSYjEa02KAqUpKcsO4EmImqaNcyPEsW1hXd2yXEl5ivHxxz531xy72SojpAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="jira-integration-2"\n        title=""\n        src="/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-e7ffa.png"\n        srcset="/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-49813.png 125w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-dc8a5.png 250w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-e7ffa.png 500w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-dda24.png 750w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-c5f18.png 1000w,\n/static/jira-cloud-4-c879776b401409d1bd5fddefd2dee9be-c2133.png 1224w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="creating">Creating a Jira Issue</h3>\nYou can create new Jira issues for reports you receive in HackerOne.\n<p>To create a new Jira issue from your HackerOne report:</p>\n<ol>\n<li>Go to the HackerOne report in your inbox that you want to create a new Jira issue for.</li>\n<li>Click <strong>Edit</strong> next to <i>References</i>.</li>\n<li>Click <strong>Create JIRA issue</strong>.</li>\n<li>Select the project that you want the issue to link to in the dropdown. <em>Note: This option occurs only if you have multiple projects to select from. If you only have 1 project, the issue will automatically escalate to that project.</em></li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/create-jira-9f50a270ae86618bbe7063723ecf4e6c-d1c2b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 340px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 59.11764705882353%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABxklEQVQoz61SS0sCURjtnxUE4WPprlbRLqhFK2lVU1AQLXTKHpseGx+LQjI0kiIMQSinqJ34GHVyhskCo9R5nebecSxLoUUfnLlzv3Pu4dyZb+j46BjBYBChUIgiHA5TfN9HIhGrH/rq2yBnj0yPJYaB2+XCEP6pzs6TGB1zWIatVguKolCiVqshlUohnU4jk8mA4zhEo1Fks1kKwpXLZapVVRXNZhOGYeAkdgqHs5NQ0zTatEH2uq7/SkF67Xab8qRsLalEIgGn09nfkJQsyyiVSpAkCYVCATzPo16vd81tnW0Yj8fhcHSuTKLbApKCXEMUReRyOQiCgEqlgnw+T3uEG5TQ7Xb3NxQl0UyVB1/mUSwWURWq9LsRNN4aUFTlL4amAPRhQe/AfNc1k9F7e7Z2oKFuWD+h1ihh92Yeh/fL2OMWsM8xCD6s0feDOwabmTkU6o/WbQytx9Blz6HSVqBqKiVy8j1mYyNYuZrE6tUUFi/G6cpcTmD9ehozsWHcVi6ssdGU7rj1JPxZr00Jzx9CB0+Q36vWau5fPsS+g51MJq2EgUAAPp8Pfr+fgmVZbG3uYHsACMeyG109OUs8vF4vPB4PPgFlZ0osfFnqyQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="create jira issue"\n        title=""\n        src="/static/create-jira-9f50a270ae86618bbe7063723ecf4e6c-d1c2b.png"\n        srcset="/static/create-jira-9f50a270ae86618bbe7063723ecf4e6c-7e4b9.png 125w,\n/static/create-jira-9f50a270ae86618bbe7063723ecf4e6c-8dca0.png 250w,\n/static/create-jira-9f50a270ae86618bbe7063723ecf4e6c-d1c2b.png 340w"\n        sizes="(max-width: 340px) 100vw, 340px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="linking">Linking HackerOne Reports to Existing Jira Tasks</h3>\nYou can link your HackerOne reports to existing Jira tasks.\n<p>To link your reports:</p>\n<ol>\n<li>Go to the HackerOne report in your inbox that you want to link to Jira.</li>\n<li>Click <strong>Edit</strong> next to <i>References</i>.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-51a3c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.300943920044425%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABtklEQVQoz42Sa2/TMBSG8+8QowhYKbTrD+YjF6mrALXNPpRtKbna8TXJu3O8JG3HJGbplY/s4+fcHE1eXWA2/YTlYon5bI7p+ykWnxe4mi/x4d1luPt4OcOb1xNMLt7+V9FmvcH652+s1r/w7ccKX7+vsNlssSXtdrtRcRy/SJHvANsArmlRCE0yoKPj6rqT/UTdmde4oqIsUQoJrTR8YyHqEkmSBAkh0LYtvPdnapoG1joUlaTdwjmHtBDEUYiyLEOR57DO4Ob6HtdfYhwOB+z3+wDVWlMyXQA/ldYmwDiA6cGRqhWqsoJSNdI/FZI4J1uBA2VpirqunwVypq23sOYRakl8HjGdHxiK1jcLUkoIqXD7N0dFNk6A7MtZl9QqXQvcJinuDjnyUqJhIDuwOBLDWZxhlQuYjGC+CWM4BXLWDMwKiVJqWN/2c+sQDU6GgEMpQgrk9ymyPQ2mqkLGQ2CuwPvHoAyW1DJl3NiWf4CDragFNYltFp8756lXvgeff62hghHI49cUSSpLF91YwlFtgBn6Lt0zEz8DtvTAO4skE9juU9zc5QHM5R2d+5JDNt2TYEc9AJkvfRCDb3T1AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="link to jira-1"\n        title=""\n        src="/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-e7ffa.png"\n        srcset="/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-49813.png 125w,\n/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-dc8a5.png 250w,\n/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-e7ffa.png 500w,\n/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-dda24.png 750w,\n/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-c5f18.png 1000w,\n/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-22484.png 1500w,\n/static/link-jira-1-fc7e954a2d4c45e7ceae2e6ee3b08083-51a3c.png 1801w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="3">\n<li>Enter the Jira ticket reference ID in the <strong>Link JIRA ticket</strong> field.</li>\n<li>Click <strong>Link JIRA issue</strong>.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-51a3c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.57856746252082%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB5UlEQVQoz52S227TQBCG/XKoB0SJKKTluZB4BS4RV1wA15AW2jSlSexAc4DEiXPwae21vV7/zKyCFQoSgpV+r9Yz+/0zY1sH9/bwqHGM0+ZTNI+baBw10Hx8gpMnp3j4oGFirIO9Qxzu3/+rrG67i851F1ek809tfDi7QL9vw2bZLAfOP8jSAMoKULpClGSI0hx0/O9lxbFAGKfIshx5lmGzWcN1Xcznc0RRBK01lFIoy/IXScr3I4E8p3t5gZUfG4a1XC7psmtAG39jEpQqEQQBOJaRSVVVv6kkIymz2oxhvFtCCHybzDBwRpiMvmM6nRLYN9V5ngeO89qFmaqLArosjGHBVdKZTSwOfpk5uLr9iOGiR6AQSZIgTTPMFmvEIqmBnMu7lBJhGEImMVxvjcXKhx8KE7f4C/THl3h/8wbXoxa5KAMQBMyVroe9C2RDBq4Dmr+QKLZ5HLP4MZx+hT2+wTLwkNGAJbUR0MDDKKbLwgB+tkvXzIzTNCUlSFIJmSuKaTI0QKA3ukSr9xZDt19XJLOC2hWmPRbD8kKRodqB1+Wb6k3L/H40G8CZdDCeOxhMO/g8PoMfL+98DL0D1DXgrswMW7ev8ar9HO+6L4xeXjzDZGUbYKnLbfK2KlNN9cdfifUDf9Jxp6WNsSUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="link to jira-2"\n        title=""\n        src="/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-e7ffa.png"\n        srcset="/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-49813.png 125w,\n/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-dc8a5.png 250w,\n/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-e7ffa.png 500w,\n/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-dda24.png 750w,\n/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-c5f18.png 1000w,\n/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-22484.png 1500w,\n/static/link-jira-2-1b2240720904e132ac0e9e6458893ce8-51a3c.png 1801w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The HackerOne report will now be linked to the Jira task, and all activities that are performed on the report will be synced to the corresponding task.</p>\n<p>There\'s also another way you can  link your HackerOne reports to Jira. You can:</p>\n<ol>\n<li>Go to the bottom of your HackerOne report.</li>\n<li>Select <strong>Change state > Triaged</strong> in the action picker.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-a069e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.24734231041815%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPklEQVQoz5WSS0/DMBCE8///Btx6QFzhAEJci4SqlKqlbZo4buokbvys+mJYG4qKxKEcPq1W65nYO0mUUuCco21bbLfbWJumgfMGz+NbPL71cJ9e450PYLWjeRMJOm0VnkY3uBtc4WHYg3ZrJGEg6hqtlDDGxFpT33UdSpETCzAxh1QtnPMw1kasc/RRh7VuIL/x3iMJBkVZImcMizxHXjDqOZZVRTc/sUKndDQxJ+wXzm1+CH2itMZoPEY6TNF/6eN1kGIyy1BWAsp6+A0dJs5NfmPPIENNhlleoOLEkmE6m4OxAtOsgJAdNK1BaRPrJURDSc+WsqUdarq6i7v4Ly5AO05CsrvdLia83+9xPB5xOBwuJpwPfHzrkpCoEAIsBFMUyOn5fFmhpl8npC/q5g/qOF+RLmooyElG+rLCJ4uQXVn1CjX+AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="link to jira-3"\n        title=""\n        src="/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-e7ffa.png"\n        srcset="/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-49813.png 125w,\n/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-dc8a5.png 250w,\n/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-e7ffa.png 500w,\n/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-dda24.png 750w,\n/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-c5f18.png 1000w,\n/static/link-jira-3-8f8c7b6cc6e2ced0325bc88d6dd674ad-a069e.png 1411w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="3">\n<li>Enter the JIRA ticket number in the <strong>Enter JIRA ticket #</strong> field.</li>\n<li>Click <strong>Link JIRA issue</strong>.</li>\n</ol>',frontmatter:{path:"/programs/jira-integration.html",id:"programs/jira-integration",title:"Jira Integration",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-jira-integration-html-2bfaf122c02bf14bc464.js.map