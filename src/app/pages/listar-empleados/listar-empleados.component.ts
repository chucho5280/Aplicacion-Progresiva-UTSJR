import {EmpleadoService} from 'src/app/services/empleado.service'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  //propiedades
  empleados:any = [];
  
  constructor(private empleadoService:EmpleadoService){
    this.getEmpleados();
  }

  ngOnInit(): void{

  }

  //metodo para obtener todos los empleados
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data)=>{
      this.empleados = data;
    })
  }

  //metodo para eliminar un empleado
  eliminarEmpleado(empleado, index){
    if(window.confirm('¿Estas seguro que lo deseas eliminar?')){
      this.empleadoService.deleteEmpleado(empleado._id)
      .subscribe((data) =>{
        this.empleados.splice(index,1);
      })
    }
  }




}
