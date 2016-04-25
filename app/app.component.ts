import {Component} from 'angular2/core';
import {Mention} from './mention/mention';
import {COMMON_NAMES} from './common-names';
import {TinyMCE} from './tinymce.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Angular 2 Mentions</h1>
    <p>Simple Angular2 mentions inspired by <a href="http://jeff-collins.github.io/ment.io/#/">Ment.io</a>.</p>
    <p style="color:grey">Supports auto-complete for mentions in text input fields, text areas,
    and content editable fields. Try entering some @names below.</p>

    <h3>Minimal</h3>
    <input [mention]="items" class="form-control" type="text">

    <h3>Textarea</h3>
    <textarea [mention]="items" class="form-control" cols="60" rows="4"></textarea>

    <h3>Content Editable</h3>
    <div [mention]="items" class="form-control" contenteditable="true" style="border:1px lightgrey solid;min-height:88px"></div>

    <h3>Embedded Editor</h3>
    <tinymce></tinymce>

    <br><p style="color:grey">ng2-mentions on <a href="">Github</a></p>
    <a href="https://github.com/dmacfarlane/ng2-mentions"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
    `,
    directives: [Mention, TinyMCE]
})
export class AppComponent {
  items:string [] = COMMON_NAMES;
}
