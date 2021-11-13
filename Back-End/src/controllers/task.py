from flask import request
from flask_restx import Resource, fields
from flask_restx.utils import default_id

from models.task import TaskModel
from schemas.task import TaskSchema

from server.instance import server

task_ns = server.task_ns

task_schema = TaskSchema()
task_list_schema = TaskSchema(many=True)

item = task_ns.model('Task', {
    'title' : fields.String(description='Task title'),
    'status': fields.String(description='Task status', default='Pending'),
})

ITEM_NOT_FOUND = 'Task not found'

class Task(Resource):
    def get(self, id):
        task_data = TaskModel.find_by_id(id)
        if task_data:
            return task_schema.dump(task_data), 200
        return {'message':ITEM_NOT_FOUND}, 404
    
    @task_ns.expect(item)
    def put(self, id):
        task_data = TaskModel.find_by_id(id)
        task_json = request.get_json()

        task_data.title  = task_json['title']
        task_data.status = task_json['status']

        task_data.save_to_db()
        return task_schema.dump(task_data), 200

    def delete(self, id):
        task_data = TaskModel.find_by_id(id)
        if task_data:
            task_data.delete_from_db()
            return '', 204
        return {'message', ITEM_NOT_FOUND}, 404

class TaskList(Resource):
    def get(self):
        return task_list_schema.dump(TaskModel.find_all()), 200
    
    @task_ns.expect(item)
    @task_ns.doc('Create an Item')
    def post(self):
        task_json = request.get_json()
        task_data = task_schema.load(task_json)

        task_data.save_to_db()

        return task_schema.dump(task_data), 201