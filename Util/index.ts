import express from 'express';

//return display name of user
export function UserDisplayName(req: express.Request): string
{
    if (req.user)
    {
        let user=req.user as UserDocument
        return user.DisplayName.toString();
    }
    return '';
}
//secure areas
export function AuthGuard(req: express.Request, res: express.Response, next:express.NextFunction)
{
    if (!req.isAuthenticated())
    {
        
        return res.redirect('./login');
    }
    next();
}