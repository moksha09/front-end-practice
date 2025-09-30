import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export type UxHeaderTabType = 'primary' | 'secondary';

export interface UxHeaderTabModel<T = unknown> {
  key: T;
  name?: string;
  icon?: unknown;
  iconContext?: unknown;
  closable?: boolean;
  active?: boolean;
  pinned?: boolean;
  actions?: unknown[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  protected readonly _addButton = true;
  protected readonly _block = false;
  protected readonly _type: UxHeaderTabType = 'primary';
  protected _active = false;

  protected _tabs: UxHeaderTabModel<number>[] = [
    { key: 1, name: 'Home', active: true, closable: false },
    { key: 2, name: 'Projects', closable: true },
    { key: 3, name: 'Settings', closable: true }
  ];

  protected _onTabClick(event: unknown): void {
    // eslint-disable-next-line no-console
    console.log('Header tab click', event);
  }

  protected _onCloseClick(event: unknown): void {
    // eslint-disable-next-line no-console
    console.log('Header tab close', event);
  }

  protected _onAddClick(): void {
    const nextIndex = this._tabs.length + 1;
    this._tabs = [
      ...this._tabs,
      { key: nextIndex, name: `Tab ${nextIndex}`, closable: true }
    ];
  }

  protected _onButtonClick(): void {
    this._active = !this._active;
  }
}

