export type FixMeLater = any;

declare global {
    interface Window { Winwheel: any; }
}

window.Winwheel = window.Winwheel || {};