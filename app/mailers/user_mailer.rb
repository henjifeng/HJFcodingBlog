class UserMailer < ApplicationMailer
	##aliyun 安全组问题
	def welcome_email(user)
		# p "发送欢迎注册邮件"
		@user = user
		@url = "http://www.henjifeng.cc:3001"
		mail(to:@user.email, subject:'欢迎使用HJFcoding Blog')
	end
end