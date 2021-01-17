import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css']
})

export class EmpresaCadastroComponent implements OnInit {

  tipopessoas= [

    {label: 'FISICA', value: 'FISICA'},
    {label: 'JURIDICA', value: 'JURIDICA'},

  ];

  negocios = [

    {label: 'CLINICA', value: 'CLINICA'},
    {label: 'CONSULTORIO', value: 'CONSULTORIO'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
