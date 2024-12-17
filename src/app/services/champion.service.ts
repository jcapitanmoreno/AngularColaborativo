import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, updateDoc, doc, deleteDoc, CollectionReference, getDocs, getDoc} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import { Champion } from '../models/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  championCollection: CollectionReference;


  constructor(private firestore: Firestore) {
    this.championCollection = collection(this.firestore, 'loldetails');
  }

  // Obtener todas las Champions
  getChampions(): Observable<Champion[]> {
    return from(getDocs(this.championCollection).then(querySnapshot =>
      querySnapshot.docs.map(doc => doc.data() as Champion)
    ));
  }

  getChampion(id: string): Observable<Champion> {
    const championDocRef = doc(this.firestore, 'loldetails', id);
    return from(getDoc(championDocRef).then(docSnapshot => docSnapshot.data() as Champion));
  }

  // Agregar una nueva Champion
  addChampion(Champion: Champion): Promise<void> {
    return addDoc(this.championCollection, Champion) as unknown as Promise<void>;
  }

  // Actualizar una Champion existente
  updateChampion(id: string, Champion: Partial<Champion>): Promise<void> {
    const ChampionDocRef = doc(this.firestore, `loldetails/${id}`);
    return updateDoc(ChampionDocRef, Champion) as Promise<void>;
  }

  // Eliminar una Champion
  deleteChampion(id: string): Promise<void> {
    const ChampionDocRef = doc(this.firestore, `loldetails/${id}`);
    return deleteDoc(ChampionDocRef) as Promise<void>;
  }
}
