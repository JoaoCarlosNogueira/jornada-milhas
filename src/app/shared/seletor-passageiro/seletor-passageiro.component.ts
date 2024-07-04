import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss']
})
export class SeletorPassageiroComponent {
  @Input() titulo: string = ''
  @Input() subtitulo: string = ''

  value: number = 0
  onChange = (val: number) => {}
  onTouch = () => {}

  writeValue(val: any): void {
    this.value = val
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn
  }
  setDisabledState?(isDisabled: boolean): void {

  }

  incrementar () {
    this.value += 1
    this.onChange(this.value)
    this.onTouch()
  }

  decrementar () {
    if (this.value > 0) {
      this.value -= 1
      this.onChange(this.value)
      this.onTouch()
    }
  }
}
