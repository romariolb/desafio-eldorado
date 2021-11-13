from flask_sqlalchemy import model
from marshmallow_sqlalchemy import load_instance_mixin
from ma import ma
from models.task import TaskModel

class TaskSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = TaskModel
        load_instance = True