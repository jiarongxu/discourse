# Handle sending a message to a user from the system.
require_dependency 'post_creator'

class SystemMessage

  def self.create(recipient, type, params = {})
    self.new(recipient).create(type, params)
  end

  def initialize(recipient)
    @recipient = recipient
  end

  def create(type, params = {})

    defaults = {site_name: SiteSetting.title,
                username: @recipient.username,
                user_preferences_url: "#{Discourse.base_url}/users/#{@recipient.username_lower}/preferences",
                new_user_tips: SiteContent.content_for(:usage_tips),
                site_password: "",
                base_url: Discourse.base_url}

    params = defaults.merge(params)

    if SiteSetting.access_password.present?
      params[:site_password] = I18n.t('system_messages.site_password', access_password: SiteSetting.access_password)
    end

    title = I18n.t("system_messages.#{type}.subject_template", params)
    raw_body = I18n.t("system_messages.#{type}.text_body_template", params)

    PostCreator.create(SystemMessage.system_user,
                       raw: raw_body,
                       title: title,
                       archetype: Archetype.private_message,
                       target_usernames: @recipient.username)
  end


  # Either returns the system_username user or the first admin.
  def self.system_user
    user = User.where(username_lower: SiteSetting.system_username).first if SiteSetting.system_username.present?
    user = User.admins.order(:id).first if user.blank?
    user
  end

end
