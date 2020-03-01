# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-115884969-2'
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end

activate :livereload

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
end

helpers do
  def date_parsed_goals
    data.goals.map do |goal|
      goal.completion_date = Date.strptime(goal.completion_date, '%m/%d/%Y')
      goal
    end
  end
end
