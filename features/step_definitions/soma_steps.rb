Given /^I visit the entrance$/ do
  visit '/'
end

When /^I press '(.*)'$/ do |name|
  click_button(name)
end

Then /^I should see a soma\.fm station running$/ do
  page.text.should == "dlfdlm"
end
