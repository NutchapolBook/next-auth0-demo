// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            // use API audience in APIs (Auth0)
            audience: 'http://localhost:3000',
            scope: 'openid profile email read:next-auth0'
        },
        // redirect to this page
        returnTo: '/profile'
    })
});
