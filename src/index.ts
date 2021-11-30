import container from './inversify.config';
import App from './app';


container.get<App>(App);
