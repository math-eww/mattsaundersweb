import { Application, Request, Response } from 'express';

export const router = function(app: Application) {
  app.get('/', function(req: Request, res: Response) {
    res.render('pages/index');
  });
};
