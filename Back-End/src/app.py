from controllers.task import Task, TaskList
from flask import jsonify

from ma import ma
from db import db

from server.instance import server

# ------------------------------------------------------------
# raiz da aplicação
# ------------------------------------------------------------

api = server.api
app = server.app

@app.before_first_request
def create_tables():
    db.create_all()

api.add_resource(Task, '/tasks/<int:id>')
api.add_resource(TaskList, '/tasks')

if __name__ == '__main__':
    db.init_app(app)
    ma.init_app(app)
    server.run()