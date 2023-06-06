import { Role, RoutePaths } from "./enum";

const LocalStorageKeys = {
    USER:"user",
}

const NavigationItems = [
    {
        name: "User",
        route: RoutePaths.User,
        access: [Role.Admin]
    },
    {
        name: "Categories",
        route: RoutePaths.Category,
        access: [Role.Admin]
    },
    {
        name: "Books",
        route: RoutePaths.BookDetails,
        access: [Role.Admin, Role.Seller]
    },
    {
        name: "Update Profile",
        route: RoutePaths.UpdateProfile,
        access: [Role.Admin, Role.Buyer, Role.Seller]
    },
    {
        name: "Book Listing",
        route: RoutePaths.BookListing,
        access: [Role.Admin, Role.Buyer, Role.Seller]
    },
];

const hasAccess = (pathname, user) => {
    const navItem = NavigationItems.find((navItem) => 
        pathname.includes(navItem.route)
    );
    if(navItem){
        return(
            !navItem.access || 
            !!(navItem.access && navItem.access.includes(user.roleId))
        );
    }
    return true;
}

export { 
    NavigationItems,  
    LocalStorageKeys,
    hasAccess
}

