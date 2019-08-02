if (process.env.NODE_ENV !== "production") {
	require("dotenv").load();
}

const tg_token = process.env.TELEGRAM_TOKEN;
const ds_secret = process.env.DARK_SKY_SECRET_KEY;
const port = process.env.PORT || 3000;

const hamburg_coord = "/53.5792,9.8746";
const ds_base_url = "https://api.darksky.net/forecast/";
