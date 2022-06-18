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

export function DisplayEditList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let mistake = req.params.mistake;
    
Business.findById(mistake, {}, {}, function(err, BusinessToEdit)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Edit', page: 'edit', business: BusinessToEdit,  displayName: UserDisplayName(req)});
    });
};

export function ProcessAddList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    
};




export function ProcessEditList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index',{title: 'add Business List', page: 'add', displayName: UserDisplayName(req)});
}



export function ProcessDeleteList(req: express.Request, res: express.Response, next: express.NextFunction): void
{}

