# Danger CI configuration file
# https://danger.systems/guides/getting_started.html

# Check for changes to README.md
has_readme_changes = git.modified_files.include?("README.md")

# Ensure there is a summary for a pull request
fail 'Please provide a summary in the Pull Request description' if github.pr_body.length < 5

# Warn if PR guideline boxes are not checked.
warn 'Please check PR guidelines and check the boxes.' if github.pr_body.include? '- [ ]'
 
# Warn if pull request is not updated
warn 'Please provide a descriptive title for the Pull Request' if github.pr_title.include? 'Update README.md'

# Warn when there are merge commits in the diff
warn 'Please rebase to get rid of the merge commits in this Pull Request' if git.commits.any? { |c| c.message =~ /^Merge branch 'master'/ }

# Check links
if has_readme_changes
 require 'json'
 results = File.read 'ab-results-temp.md-markdown-table.json'
 j = JSON.parse results
 if j['error']==true
  warn j['title']
  markdown j['message']
 end
end

# Check syntax
if has_readme_changes
 require 'json'
 syntaxresults = File.read 'syntaxcheck.json'
 sj = JSON.parse syntaxresults
 if sj['error']==true
  fail sj['title']
  markdown sj['message']
 end
end
