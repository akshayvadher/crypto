import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
})
export class ThemeChangerComponent implements OnInit {
  themeList: { name: string; link: string; type: string }[] = [
    {
      name: 'cerulean',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css" integrity="sha384-3fdgwJw17Bi87e1QQ4fsLn4rUFqWw//KU0g8TvV6quvahISRewev6/EocKNuJmEw" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'cosmo',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css" integrity="sha384-5QFXyVb+lrCzdN228VS3HmzpiE7ZVwLQtkt+0d9W43LQMzz4HBnnqvVxKg6O+04d" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'cyborg',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css" integrity="sha384-nEnU7Ae+3lD52AK+RGNzgieBWMnEfgTbRHIwEvp1XXPdqdO6uLTd/NwXbzboqjc2" crossorigin="anonymous">',
      type: 'dark',
    },
    {
      name: 'darkly',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossorigin="anonymous">',
      type: 'dark',
    },
    {
      name: 'flatly',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'journal',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/journal/bootstrap.min.css" integrity="sha384-QDSPDoVOoSWz2ypaRUidLmLYl4RyoBWI44iA5agn6jHegBxZkNqgm2eHb6yZ5bYs" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'litera',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/litera/bootstrap.min.css" integrity="sha384-enpDwFISL6M3ZGZ50Tjo8m65q06uLVnyvkFO3rsoW0UC15ATBFz3QEhr3hmxpYsn" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'lumen',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lumen/bootstrap.min.css" integrity="sha384-GzaBcW6yPIfhF+6VpKMjxbTx6tvR/yRd/yJub90CqoIn2Tz4rRXlSpTFYMKHCifX" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'lux',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css" integrity="sha384-9+PGKSqjRdkeAU7Eu4nkJU8RFaH8ace8HGXnkiKMP9I9Te0GJ4/km3L1Z8tXigpG" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'materia',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/materia/bootstrap.min.css" integrity="sha384-B4morbeopVCSpzeC1c4nyV0d0cqvlSAfyXVfrPJa25im5p+yEN/YmhlgQP/OyMZD" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'minty',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'pulse',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/pulse/bootstrap.min.css" integrity="sha384-L7+YG8QLqGvxQGffJ6utDKFwmGwtLcCjtwvonVZR/Ba2VzhpMwBz51GaXnUsuYbj" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'sandstone',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sandstone/bootstrap.min.css" integrity="sha384-zEpdAL7W11eTKeoBJK1g79kgl9qjP7g84KfK3AZsuonx38n8ad+f5ZgXtoSDxPOh" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'simlex',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/simplex/bootstrap.min.css" integrity="sha384-FYrl2Nk72fpV6+l3Bymt1zZhnQFK75ipDqPXK0sOR0f/zeOSZ45/tKlsKucQyjSp" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'sketchy',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css" integrity="sha384-RxqHG2ilm4r6aFRpGmBbGTjsqwfqHOKy1ArsMhHusnRO47jcGqpIQqlQK/kmGy9R" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'slate',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css" integrity="sha384-8iuq0iaMHpnH2vSyvZMSIqQuUnQA7QM+f6srIdlgBrTSEyd//AWNMyEaSF2yPzNQ" crossorigin="anonymous">',
      type: 'dark',
    },
    {
      name: 'solar',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/solar/bootstrap.min.css" integrity="sha384-NCwXci5f5ZqlDw+m7FwZSAwboa0svoPPylIW3Nf+GBDsyVum+yArYnaFLE9UDzLd" crossorigin="anonymous">',
      type: 'dark',
    },
    {
      name: 'spacelab',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/spacelab/bootstrap.min.css" integrity="sha384-F1AY0h4TrtJ8OCUQYOzhcFzUTxSOxuaaJ4BeagvyQL8N9mE4hrXjdDsNx249NpEc" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'superhero',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css" integrity="sha384-HnTY+mLT0stQlOwD3wcAzSVAZbrBp141qwfR4WfTqVQKSgmcgzk+oP0ieIyrxiFO" crossorigin="anonymous">',
      type: 'dark',
    },
    {
      name: 'united',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/united/bootstrap.min.css" integrity="sha384-JW3PJkbqVWtBhuV/gsuyVVt3m/ecRJjwXC3gCXlTzZZV+zIEEl6AnryAriT7GWYm" crossorigin="anonymous">',
      type: 'light',
    },
    {
      name: 'yeti',
      link:
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/yeti/bootstrap.min.css" integrity="sha384-mLBxp+1RMvmQmXOjBzRjqqr0dP9VHU2tb3FK6VB0fJN/AOu7/y+CAeYeWJZ4b3ii" crossorigin="anonymous">',
      type: 'light',
    },
  ];

  activeTheme: string;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('selected-theme')) {
      this.changeThemeClicked(
        this.themeList.find(
          (theme) => theme.name === localStorage.getItem('selected-theme')
        )
      );
    }
  }

  changeThemeClicked({ name, link }): void {
    // I know this is not a proper way to change a theme in angular
    // but this is best for ROI
    document.getElementById('app-theme').innerHTML = link;
    this.activeTheme = name;
    localStorage.setItem('selected-theme', this.activeTheme);
  }
}
