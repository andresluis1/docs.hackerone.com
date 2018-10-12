webpackJsonp([0x9c26a768d670],{612:function(t,e){t.exports={data:{markdownRemark:{html:"<p>As hackers submit vulnerability reports through the HackerOne platform, their reputation measures how likely their finding is to be immediately relevant and actionable. Reputation is based exclusively on your track record as a hacker.</p>\n<p>There are a number of privileges that are gained by maintaining a high reputation such as, becoming eligible to receive invitations to private bug bounty programs. On the flip side, should your reputation decrease, the system will gradually reduce the number of report submissions allowed in a given time period.</p>\n<p>It's critical to this community that security teams be afforded a high-signal environment so that they can focus on providing a quality response to hackers who submit the best reports.</p>\n<h3>Effects of Report State on Reputation</h3>\n<p>A Hacker profile starts with a reputation of 100. Reports gain or lose reputation based on the state in which they are closed. Reputation can't decrease below 0.</p>\n<table>\n<thead>\n<tr>\n<th>Report State</th>\n<th>Reputation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Triaged</td>\n<td>+7 \n<br>\n<i>\nThe +7 reputation will be deducted if the report is closed with a state other than Resolved.\n</i>\n</b></td>\n</tr>\n<tr>\n<td>Duplicate of a resolved report submitted prior to the report being made public</td>\n<td>+2</td>\n</tr>\n<tr>\n<td>The original report is resolved before the duplicate was filed</td>\n<td>0</td>\n</tr>\n<tr>\n<td>Informative</td>\n<td>0</td>\n</tr>\n<tr>\n<td>Not Applicable</td>\n<td>-5</td>\n</tr>\n<tr>\n<td>Duplicate of a resolved report submitted after the report is made public</td>\n<td>-5</td>\n</tr>\n<tr>\n<td>Duplicate of a N/A report</td>\n<td>-5</td>\n</tr>\n<tr>\n<td>Spam</td>\n<td>-10</td>\n</tr>\n</tbody>\n</table>\n<p>Duplicates of your own reports don't influence your reputation. This enables programs to close multiple reports that have the same root cause as duplicates without affecting a hacker's reputation. </p>\n<p><i>Note: There are situations where duplicates can be \"chained\" together. For example: report #911 is a duplicate of report #888 which is a duplicate of report #311 which was marked as N/A. In this example, report #911 would get -5 reputation because it was the duplicate of a duplicate N/A report. However, we end the chain at the third duplicate. This means that any other duplicate reports that are added after the third report in the chain will automatically get 0 reputation no matter the state of the report for which it's a duplicate of.</i></p>\n<p>You'll always have access to a detailed log of reputation history, and reputation will never be necessary to access core functionality on the platform to ensure it remains accessible to new or anonymous users.</p>\n<h3>Effects of Bounties on Reputation</h3>\n<p>The bounty amount you receive also impacts your reputation. Different bounty amounts grant you reputation based on the standard deviation from the program's mean bounty amount. Here's the breakdown for how much reputation you can gain depending on your bounty:</p>\n<table>\n<thead>\n<tr>\n<th>Reputation</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>+50</td>\n<td>Known as BOUNTY_SEVERE. \n<br>\nReceived when Bounty Amount ≥ mean + 1 standard deviation</td>\n</tr>\n<tr>\n<td>+25</td>\n<td>Known as BOUNTY_HIGH. \n<br>\nReceived when Bounty Amount > mean</td>\n</tr>\n<tr>\n<td>+15</td>\n<td>Known as BOUNTY_MEDIUM. \n<br>\nReceived when Bounty Amount ≥ mean - 1 standard deviation</td>\n</tr>\n<tr>\n<td>+10</td>\n<td>Known as BOUNTY_LOW. \n<br>\nReceived when Bounty Amount &#x3C; mean - 1 standard deviation</td>\n</tr>\n</tbody>\n</table>\n<p>Keep in mind that the first 10 bounties of a program will be rewarded the BOUNTY_MEDIUM reputation. After 10 bounties have been paid out, hackers will gain reputation through bounty according to the system above.</p>\n<p><i>Note: We don't award reputation when rewarded with a bonus and not a bounty.</i></p>",frontmatter:{title:"Reputation",id:"hackers/reputation",path:"/hackers/reputation.html",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---hackers-reputation-html-078506a25aee19a9f9e6.js.map