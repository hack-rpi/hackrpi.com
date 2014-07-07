use Rack::Static,
	:urls => ["/assets", "/font-awesome-4.0.3", "/fonts", "/scripts", "/stylesheets"],
	:root => "public"
	
run lambda { |env|
	[
		200,
		{
			'Content-Type' => 'text/html',
			'Cache-Control' => 'public, max-age=86400'
		},
		File.open('public/index.html', File::RDONLY)
	]
}