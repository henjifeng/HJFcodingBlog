class Fmis::RecordsController < ApplicationController
	before_action :authenticate_user!
	before_action :set_fmis_record, only: [:update, :destroy]
	#GET /fmis/records
	def index
		@records = ::Fmis::Record.where("author_id" => current_user.id.to_s)
		respond_to do |format|
		    format.html { render :index}
		    format.json { render json: format_index_data}
		end
	end

	# POST /fmis/records
	def create
		p "fmis record create",params
		@record = ::Fmis::Record.new(fmis_record_params.merge(author_id: current_user.id.to_s))
		if @record.save
			render json: to_hash(@record)
		else
		end
	end

	# PUT /fmis/records/:id(.:format)
	def update
		p "fmis record update",params
		if @record.update(fmis_record_params)
			render json: to_hash(@record)
		else
		end
	end

	#DELETE /fmis/records/:id(.:format)
	def destroy
		p "fmis record destroy",params
		if @record.destroy
			render json: to_hash(@record)
		else
		end
	end

	private
	def format_index_data 
		@records.map {|_record| to_hash(_record) }
	end

	def to_hash(cur_record)
		{
			id: cur_record.id.to_s,
			# date: cur_record.date.to_formatted_s(:db),
			date: cur_record.date.strftime("%Y-%m-%d"),
			title: cur_record.title,
			amount: cur_record.amount
		}
	end

	# Use callbacks to share common setup or constraints between actions.
  def set_fmis_record
    @record = Fmis::Record.find(params[:id])
  end

	# Never trust parameters from the scary internet, only allow the white list through.
  def fmis_record_params
    params.require(:record).permit(:title, :date, :amount)
  end
end
