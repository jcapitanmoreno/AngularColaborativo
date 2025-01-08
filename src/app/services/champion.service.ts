import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, doc, deleteDoc, CollectionReference, getDocs, getDoc } from '@angular/fire/firestore';
import { from, Observable, BehaviorSubject } from 'rxjs';  // Importa BehaviorSubject
import { Champion } from '../models/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  championCollection: CollectionReference;
  private championSubject = new BehaviorSubject<Champion | null>(null);  // Almacena el champion temporalmente
  champion$ = this.championSubject.asObservable();  // Permite observar el champion

  constructor(private firestore: Firestore) {
    this.championCollection = collection(this.firestore, 'loldetails');
  }

  // Obtener todos los Champions
  getChampions(): Observable<Champion[]> {
    return from(getDocs(this.championCollection).then(querySnapshot =>
      querySnapshot.docs.map(doc => ({
        ...doc.data() as Champion,
        id: doc.id
      }))
    ));
  }

  // Obtener un solo Champion por ID
  getChampion(id: string): Observable<Champion> {
    const championDocRef = doc(this.firestore, 'loldetails', id);
    return from(getDoc(championDocRef).then(docSnapshot => docSnapshot.data() as Champion));
  }

  // Agregar un nuevo Champion
  addChampion(champion: Champion): Promise<void> {
    return addDoc(this.championCollection, champion) as unknown as Promise<void>;
  }

  // Actualizar un Champion existente
  updateChampion(id: string, champion: Partial<Champion>): Promise<void> {
    const championDocRef = doc(this.firestore, `loldetails/${id}`);
    return updateDoc(championDocRef, champion) as Promise<void>;
  }

  // Eliminar un Champion
  deleteChampion(id: string): Promise<void> {
    const championDocRef = doc(this.firestore, `loldetails/${id}`);
    return deleteDoc(championDocRef) as Promise<void>;
  }


  setChampion(champion: Champion) {
    this.championSubject.next(champion);  // Almacena el champion
  }

  getChampionFromService(): Observable<Champion | null> {
    return this.champion$;  // Devuelve el Observable
  }
}
