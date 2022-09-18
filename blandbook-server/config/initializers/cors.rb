Rails.application.config.middleware.insert_before 0, Rack::Cors do
  
    allow do
      origins '*' # set CORS header. This should be updtated to the correct origin on deploy
      resource '*', headers: :any, methods: :any
      # handle OPTIONS requests from axios.post() "pre-flight" check
    end
  
  end 