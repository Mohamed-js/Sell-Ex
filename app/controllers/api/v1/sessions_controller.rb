class Api::V1::SessionsController < Api::V1::ApiController
    skip_before_action :verify_authenticity_token
    def create
        @client = Client.find_by(email: params[:email])
        if @client&.authenticate(params[:password])
            self.set_client_session  
            render json: @client, only: %i[first_name last_name], status: :ok
        else
            session[:client_id] = null
            render json: { failure: 'There is no such user.' }, status: :unauthorized
        end
    end

    def destroy
        session[:client_id] = null
        render json: {message: "logged out."}
    end

    private
    def set_client_session
        session[:client_id] = @client.id
    end
end
