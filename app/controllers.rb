Randomsoma.controller do
  get :index do
    render 'index'
  end
  
  get :random_name do
    station_names = Nokogiri::HTML open 'http://somafm.com/listen/'
    station_names = station_names.css('#stations ul li p a @href').map {|el| el.value.split('/').last }
    station_names[rand station_names.size]
  end
end