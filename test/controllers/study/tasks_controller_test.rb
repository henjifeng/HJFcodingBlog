require 'test_helper'

class Study::TasksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @study_task = study_tasks(:one)
  end

  test "should get index" do
    get study_tasks_url
    assert_response :success
  end

  test "should get new" do
    get new_study_task_url
    assert_response :success
  end

  test "should create study_task" do
    assert_difference('Study::Task.count') do
      post study_tasks_url, params: { study_task: { important: @study_task.important, title: @study_task.title } }
    end

    assert_redirected_to study_task_url(Study::Task.last)
  end

  test "should show study_task" do
    get study_task_url(@study_task)
    assert_response :success
  end

  test "should get edit" do
    get edit_study_task_url(@study_task)
    assert_response :success
  end

  test "should update study_task" do
    patch study_task_url(@study_task), params: { study_task: { important: @study_task.important, title: @study_task.title } }
    assert_redirected_to study_task_url(@study_task)
  end

  test "should destroy study_task" do
    assert_difference('Study::Task.count', -1) do
      delete study_task_url(@study_task)
    end

    assert_redirected_to study_tasks_url
  end
end
