class Api::V1::RegistrationsController < Api::V1::ApiController
    def create
        # User already exists
        @client = @store.clients.where(email: params[:email])
        render json: {message: 'User already exists.'} if @client

        # User not found, => create User
        @client = Client.create(email: params[:email], password: bcrypt())
    end
end