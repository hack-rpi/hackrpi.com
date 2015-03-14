
use Rack::Static, 
  :urls => ["/fonts", "/scripts", "/stylesheets", "2014/assets", "2014/font-awesome-4.0.3", "2014/fonts", "2014/scripts", "2014/stylesheets", "2014/images"],
  :root => "public"

map "/" do
  run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
end
  
map "/2014/" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/2014/index.html', File::RDONLY)
  ]
}
end

map "/2014/reimbursement" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/2014/reimbursement.html', File::RDONLY)
  ]
}
end

map "/2014/register" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/2014/register.html', File::RDONLY)
  ]
}
end

map "/2014/map" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/2014/map.html', File::RDONLY)
  ]
}
end

map "/2014/schedule" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/2014/schedule.html', File::RDONLY)
  ]
}
end

map "/2014/prizes" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/2014/prizes.html', File::RDONLY)
  ]
}
end