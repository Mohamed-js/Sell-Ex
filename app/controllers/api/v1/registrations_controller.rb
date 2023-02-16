class Api::V1::RegistrationsController < Api::V1::ApiController
    skip_before_action :verify_authenticity_token
    def create
        # User already exists
        @client = @store.clients.where(email: params[:email])
        return render json: {message: 'User already exists.'}, status: :unprocessable_entity if @client

        # User not found, => create User
        @client = @store.clients.build(email: params[:email], password: params[:password], first_name: params[:first_name], last_name: params[:last_name])
        return render json: {message: 'User created successfully'}, status: :ok if @client.save

        # User has errors
        render json: {message: @client.errors.full_messages}, status: :unprocessable_entity unless @client.valid?
    end
end
