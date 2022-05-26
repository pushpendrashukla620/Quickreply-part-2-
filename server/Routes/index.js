const express = require('express');

const propertyRoutes=require("./property.routes")

const router = express.Router();

const defaultRoutes = [
    {
        path: '/property',
        route: propertyRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;