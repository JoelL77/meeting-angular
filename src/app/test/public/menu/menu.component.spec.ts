import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { MenuComponent } from 'src/app/public/menu/menu.component';
import { MainComponent } from 'src/app/public/main/main.component';
import { FooterComponent } from 'src/app/public/footer/footer.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent,MainComponent,FooterComponent ],
      providers : [AuthService],
      imports : [HttpClientTestingModule,RouterTestingModule,PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});