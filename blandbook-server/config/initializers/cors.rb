Rails.application.config.middleware.insert_before 0, Rack::Cors do
    # avoid CORS issues from back to front end. 
    # Origin can be updated once the url is created
    
    allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete]
    end


end