class Study::TasksController < ApplicationController
  before_action :set_study_task, only: [:show, :edit, :update, :destroy]

  # GET /study/tasks
  # GET /study/tasks.json
  def index
    @study_tasks = Study::Task.all
  end

  # GET /study/tasks/1
  # GET /study/tasks/1.json
  def show
  end

  # GET /study/tasks/new
  def new
    @study_task = Study::Task.new
  end

  # GET /study/tasks/1/edit
  def edit
  end

  # POST /study/tasks
  # POST /study/tasks.json
  def create
    @study_task = Study::Task.new(study_task_params)

    respond_to do |format|
      if @study_task.save
        format.html { redirect_to @study_task, notice: 'Task was successfully created.' }
        format.json { render :show, status: :created, location: @study_task }
      else
        format.html { render :new }
        format.json { render json: @study_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /study/tasks/1
  # PATCH/PUT /study/tasks/1.json
  def update
    respond_to do |format|
      if @study_task.update(study_task_params)
        format.html { redirect_to @study_task, notice: 'Task was successfully updated.' }
        format.json { render :show, status: :ok, location: @study_task }
      else
        format.html { render :edit }
        format.json { render json: @study_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /study/tasks/1
  # DELETE /study/tasks/1.json
  def destroy
    @study_task.destroy
    respond_to do |format|
      format.html { redirect_to study_tasks_url, notice: 'Task was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_study_task
      @study_task = Study::Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def study_task_params
      params.require(:study_task).permit(:title, :important)
    end
end
