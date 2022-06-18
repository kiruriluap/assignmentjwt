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


export function ProcessAddList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let newBusiness = new Business
    ({
        "Name": req.body.username,
        "Number": req.body.number,
        "email": req.body.emailAddress
    });

    Business.create(newBusiness, function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
};




export function ProcessEditList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index',{title: 'add Business List', page: 'add', displayName: UserDisplayName(req)});
}



export function ProcessDeleteList(req: express.Request, res: express.Response, next: express.NextFunction): void
{}

