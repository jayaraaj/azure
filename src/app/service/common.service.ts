import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommonService {

    $copied = new BehaviorSubject<boolean>(null);
    $pageName = new Subject<[{id: number, pageName: string}]>();

    copied(text) {
        let listener = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', (text.textContent));
            e.preventDefault();
          };
          document.addEventListener('copy', listener);
          document.execCommand('copy');
          document.removeEventListener('copy', listener);
          this.$copied.next(true);
          setTimeout(()=>{
            this.$copied.next(false);
          }, 5000);
    }


    getPageName(id, pageName){
      this.$pageName.next([{id: id, pageName: pageName}]);
    }
}