import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
const URL_REGEXP =
  /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

@Component({
  selector: 'app-input-url',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-url.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputUrlComponent {
  isLoading = input<boolean>(false);

  urlInput = new FormControl('', [
    Validators.required,
    Validators.pattern(URL_REGEXP),
  ]);
  url = output<string>();

  createPreview() {
    if (this.urlInput.valid && this.urlInput.value) {
      this.url.emit(this.urlInput.value);
    }
  }
}
