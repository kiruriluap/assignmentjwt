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
  Business.findById(id, {}, {}, function(err, BusinessToEdit)
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
//*********************** */

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
	{
	  // instantiate a new Business to Add
	  let newBusiness = new Business
	  ({
	    "Name": req.body.businessName,
	    "Number": req.body.businessNumber,	    
	    "Address": req.body.businessEmail
	  });
	

	  // Insert the new Business object into the database (businesss collection)
	  Business.create(newBusiness, function(err: CallbackError)
	  {
	    if(err)
	    {
	      console.error(err);
	      res.end(err);
	    }
	

	    // new business has been added -> refresh the business-list
	    res.redirect('/business-list');
	  })
	}
	

	export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
	{
	  let id = req.params.id;
	

	  // instantiate a new Business to Edit
	  let updatedBusiness = new Business
	  ({
	    "_id": id,
	    "Name": req.body.businessName,
	    "Number": req.body.businessNumber,	    
	    "Address": req.body.businessEmail
	  });
	

	  // update the business in the database
	  Business.updateOne({_id: id}, updatedBusiness, function(err: CallbackError)
	  {
	    if(err)
	    {
	      console.error(err);
	      res.end(err);
	    }	

	   
	    res.redirect('/business-list');
	  });
	}
	

	export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
	{
	  let id = req.params.id;
	

	  // pass the id to the database and delete the business
	  Business.remove({_id: id}, function(err: CallbackError)
	  {
	    if(err)
	    {
	      console.error(err);
	      res.end(err);
	    }
	

	    // delete was successful
	    res.redirect('/business-list');
	  });
	}




//******************

