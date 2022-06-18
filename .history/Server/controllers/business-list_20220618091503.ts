import express from 'express';

import Business from '../Models/business';

import { UserDisplayName } from '../../Util';
import router from '../Routes';

export function DisplayBusinessList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    Business.find(function(err, businessesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: UserDisplayName(req)});
    });
}

export function DisplayAddList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index',{title: 'add Business List', page: 'edit', business: '', displayName: UserDisplayName(req)});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the db and read the movie into the edit page
  Movie.findById(id, {}, {}, function(err, movieToEdit)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view with the data
    res.render('index', { title: 'Edit', page: 'edit', movie: BusinessToEdit, displayName:  UserDisplayName(req) })
  });
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;
    
Business.findById(id, {}, {}, function(err, )
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'edit Business List', page: 'edit', business: BusinessToEdit,  displayName: UserDisplayName(req)})
    });
};

export function ProcessAddList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    
};

export function ProcessEditList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    
}

export function ProcessDeleteList(req: express.Request, res: express.Response, next: express.NextFunction): void
{

}

