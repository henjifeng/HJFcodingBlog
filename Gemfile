source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.5'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]


# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'
# 前端框架
gem 'react-rails'


#部署
# gem 'mina'


#HTML markdown
# gem 'redcarpet'
# gem 'rouge'
# , git: 'https://github.com/stanhu/rouge'

#rails 国际化  本地汉化
gem 'rails-i18n'

# # admin
# gem 'rails_admin'


#html模板引擎
# gem "slim-rails" #http://slim-lang.com/


gem 'dalli'
#验证码、头像
gem 'rucaptcha'
gem 'letter_avatar'

#database
# gem 'pg' ## bundle config build.pg --with-pg-config=<path to pg_config>
# gem 'pghero'
gem 'mongoid'

## 用户系统
gem 'devise'
gem 'devise-encryptable'

## Permission
gem 'cancancan'


#分页
gem 'kaminari'
gem 'kaminari-i18n'
gem 'awesome_print'

#js相关
gem 'execjs'
gem 'therubyracer'