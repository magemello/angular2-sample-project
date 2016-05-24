import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HelloService } from './hello.service';

bootstrap(AppComponent, [HelloService]);
