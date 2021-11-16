from enum import unique
from db import db

# ------------------------------------------------------------
# modelo utilizado para scripts SQL (Alchemy)
# ------------------------------------------------------------

class TaskModel(db.Model):
    __tablename__ = 'tasks'

    id     = db.Column(db.Integer, primary_key=True)
    title  = db.Column(db.String(80), nullable=False, unique=True)
    status = db.Column(db.String(80), nullable=False, unique=False)

    def __init__(self, title, status):
        self.title  = title
        self.status = status

    def __repr__(self):
        return f'TaskModel(title={self.title}, status={self.status})'
    
    def json(self):
        return {
            'title'  : self.title,
            'status' : self.status
        }

    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()
    
    @classmethod
    def find_by_status(cls, status):
        return cls.query.filter_by(status=status).get()

    @classmethod
    def find_all(cls):
        return cls.query.all()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
