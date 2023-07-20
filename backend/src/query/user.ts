export const loginUserQuery = `
EXEC dbo.LoginUser
    @email = @email,
    @password = @password
`;

export const registerUserQuery = `
EXEC dbo.RegisterUser
    @name = @name,
    @email = @email, 
    @password = @password
`;

export const passwordRecoverQuery = `
EXEC dbo.PasswordRecover
    @email = @email
`;

export const validateTokenQuery = `
if not exists
(
    select * from dbo.[User] 
    where @token in (emailConfirmToken, resetPasswordToken) 
)begin
    THROW 51000, 'Token is invalid or expired.', 1;  
end
`;

export const loggedUserQuery = `
    select *
    from dbo."User" 
    where email = @__ctx
`;
<<<<<<< HEAD
=======

export const getUsersQuery = `
select *
from dbo."User" 
`;

>>>>>>> b89b88226a926c5e98f02bc950e4ffa7a94ef53d
