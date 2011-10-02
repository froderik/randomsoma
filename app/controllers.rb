Randomsoma.controller do
  get :index do
    render 'index'
  end
  
  get :random_name do
    soma_listen = Nokogiri::HTML open 'http://somafm.com/listen/'
    station_names = []
    soma_listen.css('#stations ul li p a @href').each {|el| station_names << el.value.split('/').last }
    station_names[rand station_names.size]
  end
end