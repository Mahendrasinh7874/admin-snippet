const mode = "DEV";
// const mode = "PROD";

// Change Url Here

export const BASE_URL =
    mode === "PROD"
        ? " https://api.scout-heim.vytech.co"
        : "https://api.scout-heim.vytech.co";

export const BASE_URL_UPLOAD =
    mode === "PROD"
        ? " https://api.scout-heim.vytech.co/uploads"
        : "https://api.scout-heim.vytech.co/uploads";